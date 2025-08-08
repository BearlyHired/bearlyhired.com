import { useTranslation } from '@/hooks/useTranslation';
import './Footer.css';

export type FooterProps = {
  // No props needed for this component currently
};

export const Footer = ({}: FooterProps) => {
  const { t } = useTranslation();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-launch-date">
              {t('features.welcome.footer.launchDate')}
            </p>
            <p className="footer-copyright">
              {t('features.welcome.footer.copyright')}
            </p>
          </div>
          
          <div className="footer-social">
            <a
              href="https://twitter.com/bearlyhired"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Follow us on Twitter"
            >
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <a
              href="https://linkedin.com/company/bearlyhired"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Follow us on LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="https://twitch.tv/bearlyhired"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Watch us on Twitch"
            >
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
            </a>
            
            <a
              href="https://github.com/bearlyhired"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="View our GitHub"
            >
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};