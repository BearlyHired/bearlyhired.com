# CLAUDE.md - BearlyHired.com Development Guide

## 🔴 CRITICAL RULES (Never Violate)

### Architecture & Component Organization
- **Components belong in features, not global components** - Header, Hero, Features, EmailSignup belong in `features/WelcomePage/components/`, NOT `src/components/`
- **Global components are truly reusable** - Only ErrorBoundary, Footer, etc. that work across multiple features
- **Event handlers live in the component** - Don't pass handlers down as props unless truly necessary for reusability
- **Self-contained features** - WelcomePage should handle its own interactions, not rely on App-level handlers

### Following Project Guidelines
- **READ CLAUDE.md FIRST** - Always check existing patterns before implementing
- **Don't break working systems** - If translations work, don't create custom hooks that break them
- **Ask for clarification** - If unsure about architecture decisions, ask rather than assume
- **Pay attention to user feedback** - When user says "silly goose" or "are you paying attention", STOP and reassess

### Test-Driven Development  
- **NO production code without a failing test first**
- Follow Red-Green-Refactor strictly
- 100% behavior coverage required (not line coverage)
- Test behavior through public APIs only

### TypeScript Requirements
```json
{
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true
}
```
- **Prefer `type` over `interface`** - use `type` for all type definitions unless you specifically need interface extension
- No `any` types - use `unknown` if needed
- No type assertions (`as`) without justification
- No `@ts-ignore` or `@ts-expect-error`
- Use type-only imports: `import type { ReactNode, ErrorInfo } from 'react'`
- Use `type` for component props, form data, API responses, etc.

### React Components
Every component MUST have:
1. **Unit tests** (.test.tsx) - behavior testing with React Testing Library
2. **Storybook stories** (.stories.tsx) - all prop variations documented

### Forms
- **ALL forms MUST use React Hook Form** - no exceptions
- Use Zod schemas for form validation when appropriate
- Include proper error handling and user feedback
- Form validation should be client-side first
- **Add `noValidate` to form elements** - let React Hook Form handle validation
- **All forms must have proper accessibility** - labels, error associations, ARIA attributes

#### Component Organization
- **Self-contained complex components** - Forms, modals, and other complex components should be separate components
    - Feature-specific components go in `features/FeatureName/components/`
    - Shared/reusable components go in `src/components/`
- **Folder per component** - each component in its own folder
- **PascalCase naming** - all component files use PascalCase
- **Index exports** - each component folder has an index.ts using `export * from './ComponentName'`
- **SCSS modules** - all styling uses SCSS modules with variables and nesting
- **Structure**:
  ```
  components/
    Button/
      Button.tsx              # Component implementation
      Button.test.tsx         # Unit tests
      Button.stories.tsx      # Storybook stories
      Button.module.scss      # Component styles (SCSS module)
      index.ts                # export * from './Button'
  ```
- **Import pattern**: `import { Button } from '@/components/Button'`

### Styling Standards
- **SCSS only** - all styles must use SCSS, not CSS
- **CSS Modules** - components and features use `.module.scss` for scoped styles
- **Variables** - use SCSS variables for colors, spacing, and other design tokens
- **Nesting** - leverage SCSS nesting for cleaner, more organized styles
- **BEM-like naming** - use semantic class names (avoid BEM syntax in modules)

#### SCSS Module Example
```scss
// Button.module.scss
$primary-color: #3b82f6;
$border-radius: 4px;

.button {
  border-radius: $border-radius;
  
  &.primary {
    background-color: $primary-color;
    
    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}
```

```typescript
// Button.tsx
import styles from './Button.module.scss';

export function Button({ variant }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      Click me
    </button>
  );
}
```

## 🟡 PROJECT STRUCTURE

```
src/
  components/       # Pure, reusable UI components
    SomeComponent/        # The Feature name        
        SomeComponent.tsx             # Main component file
        SomeComponent.module.scss     # component styles if appropriate
        SomeComponent.stories.tsx     # Storybook story for the component
        SomeComponent.test.tsx        # Unit tests for component
        index.ts    # Export aggregator
  features/         # Feature modules with own components/hooks/types
    SomeFeature/        # The Feature name
        components/                 # Components specific to the feature - not global components
        SomeFeature.tsx             # Main feature file
        SomeFeature.module.scss     # Feature styles if appropriate
        SomeFeature.stories.tsx     # Storybook story for the feature
        SomeFeature.test.tsx        # Unit tests for feature
        index.ts    # Export aggregator
  schemas/          # Zod schemas (define schemas first, derive types)
  i18n/            # Translations organized by language
    en/            # English translations
      common.ts    # Common/shared translations
      components.ts # Component-specific translations
      features.ts  # Feature-specific translations
      modals.ts    # Modal-specific translations
      index.ts     # Export aggregator
    es/            # Spanish translations (same structure as en/)
```

### Schema-First Development
```typescript
// Define schema first
const UserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1)
});

// Derive type from schema
type User = z.infer<typeof UserSchema>;
```

### Internationalization (i18n)
- **ALL user-facing text MUST use translations** - no hardcoded strings in components
- **Language-first folder structure** - each language has its own folder (`en/`, `es/`)
- **Organized by context** - translations separated into files:
    - `common.ts` - shared translations (app name, common actions, validation messages)
    - `components.ts` - component-specific translations
    - `features.ts` - feature-specific translations
    - `modals.ts` - modal dialog translations
- **Use react-i18next directly** - `import { useTranslation } from 'react-i18next'` (no custom hooks)
- **Namespace with keyPrefix pattern** - `useTranslation('components', { keyPrefix: 'ComponentName' })`
- **Translation keys MUST be readable fallbacks** - if translation fails, the key should make sense to users
- **Form validation messages** - all form validation messages must be in translations
- **No hardcoded text** - includes placeholders, button text, headings, error messages

#### Translation Key Guidelines
- **Keys are user-facing fallbacks** - use quoted keys like `'Get Notified': 'Get notified when we launch'`
- **Component names match namespaces** - `EmailSignup` component uses `EmailSignup` namespace
- **Meaningful key names** - `'Join Waitlist'` not `'button1'` or `'cta'`
- **Keys should be readable in UI** - if i18n fails, `'Bearly Hired'` displays instead of `'logoAlt'`

#### i18n Usage Example
```typescript
import { useTranslation } from 'react-i18next';

// Component with namespace and keyPrefix
export const EmailSignup = ({ onSubmit }) => {
  const { t } = useTranslation('components', { keyPrefix: 'EmailSignup' });
  
  return (
    <section>
      <h2>{t('Get Notified')}</h2>
      <p>{t('Be The First To Join')}</p>
      <input placeholder={t('Enter Email')} />
      <button>{t('Join Waitlist')}</button>
    </section>
  );
};

// Translation file structure (components.ts)
export const components = {
  EmailSignup: {
    'Get Notified': 'Get notified when we launch',
    'Be The First To Join': 'Be the first to join a professional network...',
    'Enter Email': 'Enter your email',
    'Join Waitlist': 'Join Waitlist',
  },
  Header: {
    'Bearly Hired': 'Bearly Hired',
    'Join Waitlist': 'Join Waitlist',
  },
};
```

## 🟢 CODING STANDARDS

### Core Principles
- **Immutable data only** - no mutations
- **Pure functions** where possible
- **No comments** - code must be self-documenting
- **Early returns** over nested conditionals
- **Options objects** over multiple parameters

### Testing Approach
```typescript
// Test factory pattern
const getMockUser = (overrides?: Partial<User>): User => ({
  email: 'test@example.com',
  name: 'Test User',
  ...overrides
});

// Test behavior, not implementation
it('should show error for invalid email', async () => {
  render(<EmailSignup onSubmit={jest.fn()} />);
  
  await userEvent.type(screen.getByLabelText('Email'), 'invalid');
  await userEvent.click(screen.getByRole('button'));
  
  expect(screen.getByText('Invalid email')).toBeInTheDocument();
});

// Test accessibility features
it('should support keyboard navigation', async () => {
  render(<InteractiveComponent />);
  
  const button = screen.getByRole('button');
  button.focus();
  
  await userEvent.keyboard('{Enter}');
  expect(button).toHaveAttribute('aria-pressed', 'true');
  
  await userEvent.keyboard(' ');
  expect(button).toHaveAttribute('aria-pressed', 'false');
});

// Test interactive state management
it('should handle selection state correctly', async () => {
  render(<SelectableComponent />);
  
  const options = screen.getAllByRole('option');
  await userEvent.click(options[0]);
  
  expect(options[0]).toHaveAttribute('aria-selected', 'true');
  expect(options[1]).toHaveAttribute('aria-selected', 'false');
});
```

### Naming Conventions
- Functions: `camelCase` verbs (`calculateTotal`)
- Types: `PascalCase` (`PaymentRequest`)
- Component files: `PascalCase` (`Button.tsx`, `LanguageSelector.tsx`)
- Non-component files: `kebab-case.ts`
- Test files: `*.test.tsx` (PascalCase for components)
- Stories: `*.stories.tsx` (PascalCase for components)

### Import Path Rules
- **Use path aliases for cleaner imports** - avoid relative paths except for direct descendants
- **Preferred aliases**:
    - `@/components/` for shared components
    - `@/features/` for feature components
    - `@/assets/` for assets
    - `@/i18n/` for translations
- **Relative paths allowed only for**:
    - Feature importing its own components: `'./components/ContactForm'`
    - Component importing its styles: `'./Button.module.scss'`

### Import Order
Organize imports in this specific order with **newlines between each section**:

1. **External packages** (React, libraries, etc.)
2. **Global components** (`@/components/*`)
3. **Internal components** (`./components/*`, relative paths)
4. **Services/Utils** (`@/services/*`, `@/utils/*`)
5. **Hooks** (`@/hooks/*`, custom hooks)
6. **Types** (`@/types/*`, type-only imports)
7. **Assets** (`@/assets/*`)
8. **Styles** (`./Component.module.scss` - always last)

**Example**:
```typescript
// External packages
import React from 'react';
import { useForm } from 'react-hook-form';

// Global components  
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

// Internal components
import { ContactForm } from './components/ContactForm';
import { FeatureCard } from './components/FeatureCard';

// Services
import { apiService } from '@/services/api';

// Hooks
import { useTranslation } from '@/i18n/use-translation';
import { useLocalStorage } from '@/hooks/use-local-storage';

// Types
import type { User } from '@/types/user';

// Assets
import logoSvg from '@/assets/logo.svg';

// Styles (always last)
import styles from './LandingPage.module.scss';
```

## 📋 DEVELOPMENT WORKFLOW

1. **Write failing test** describing desired behavior
2. **Write minimal code** to pass the test
3. **Assess refactoring** - only if it adds value
4. **Run quality checks** before committing:
   ```bash
   npm run test
   npm run lint
   npm run typecheck
   ```

### Commit Format
```
feat: add email validation
fix: correct hero image sizing
refactor: extract payment helpers
test: add edge cases for signup
```

## 🚀 QUICK COMMANDS

```bash
npm run dev          # Start dev server
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run storybook    # Start Storybook
npm run lint         # Check linting
npm run typecheck    # Check TypeScript
```

## 🔧 PATH ALIASES CONFIGURED

The project uses path aliases for clean imports:
- `@/components/*` → `./src/components/*`
- `@/features/*` → `./src/features/*`
- `@/assets/*` → `./src/assets/*`
- `@/i18n/*` → `./src/i18n/*`
### Security & Sensitive Data
- **NEVER commit secrets** - no passwords, API keys, tokens, or credentials in code
- **Use environment variables** - all sensitive config must come from `.env` files
- **`.env` files must be in `.gitignore`** - never commit any `.env` file variants
- **No hardcoded credentials** - even in tests, use mock values or env vars
- **Sanitize logs** - never log sensitive information
- **Use secret scanning** - regularly check for accidentally committed secrets
- **Example of what NOT to do:**
  ```typescript
  // ❌ NEVER DO THIS
  const apiKey = "sk-1234567890abcdef";
  const dbPassword = "mysecretpassword";
  
  // ✅ DO THIS INSTEAD
  const apiKey = process.env.API_KEY;
  const dbPassword = process.env.DB_PASSWORD;
  ```

### File Management
- **Temporary files MUST go in `./tmp` directory** - create a local tmp folder in project root
- Use proper cleanup of temporary files after use
- Always use the project's tmp directory: `./tmp/filename.ext`
- The `tmp/` directory should be in `.gitignore` to prevent committing temporary files

## 🛡️ ACCESSIBILITY & ERROR HANDLING

### Accessibility Standards
- **ALL interactive elements MUST be keyboard accessible** - Support Space and Enter keys
- **ARIA labels required** - Every button, form field, and interactive element needs descriptive labels
- **Semantic HTML** - Use proper heading hierarchy (h1→h2→h3), landmarks, and roles
- **Form accessibility** - Labels associated with inputs, error messages with `aria-describedby`, `aria-invalid`
- **Screen reader support** - Use `aria-live` regions for dynamic content updates
- **Visual focus indicators** - Clear focus states for all interactive elements

### Error Boundary Requirements
- **ALL applications MUST have error boundaries** - Wrap the main App component
- **Error boundaries should**:
    - Show user-friendly error messages
    - Provide retry functionality
    - Log errors for debugging (with callbacks)
    - Support custom fallback components
    - Show detailed errors only in development mode
- **Error boundaries should NOT**:
    - Catch errors in event handlers (use try/catch)
    - Catch errors in async code (use proper error handling)
    - Replace proper error handling in components

#### Error Boundary Example
```typescript
// App.tsx
import { ErrorBoundary } from '@/components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // Send to error reporting service
        console.error('Application error:', error, errorInfo);
      }}
    >
      <YourApp />
    </ErrorBoundary>
  );
}
```

### Testing Standards for New Functionality
- **Interactive features require comprehensive tests** - User interactions, keyboard navigation
- **Accessibility testing mandatory** - Test ARIA attributes, focus management, keyboard navigation
- **Mock external dependencies** - File downloads, URL creation, DOM manipulation
- **Test behavior, not implementation** - Focus on user-facing functionality
- **Global test setup** - Mock common browser APIs in `setupTests.ts`

#### Test Setup Example
```typescript
// src/setupTests.ts
import '@testing-library/jest-dom';

// Mock browser APIs globally
global.URL.createObjectURL = jest.fn(() => 'mocked-object-url');
global.URL.revokeObjectURL = jest.fn();
global.Blob = jest.fn((content, options) => ({
  size: content?.[0]?.length || 0,
  type: options?.type || 'text/plain',
})) as any;
```

## 🔗 REFERENCES

For detailed patterns and examples:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Testing Library](https://testing-library.com/docs/guiding-principles)
- [React Testing Examples](https://github.com/testing-library/react-testing-library)
## 📝 PROJECT NOTES

### Current State
- Landing page with hero, features, email signup
- i18n support (English, Spanish)
- Bear-themed branding throughout
- Component library documented in Storybook

### Important Context
- Bear theme is core to brand identity
- Email waitlist is primary conversion goal
- Must maintain 100% test coverage for business logic
- All components need both tests AND stories

---

**Remember**: When in doubt, write a test first. If writing production code without a failing test, STOP immediately.
