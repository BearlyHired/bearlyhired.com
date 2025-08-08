export const features = {
  auth: {
    login: {
      title: 'Bienvenido de Vuelta',
      subtitle: 'Por favor inicie sesión en su cuenta',
      emailLabel: 'Correo Electrónico',
      passwordLabel: 'Contraseña',
      forgotPassword: '¿Olvidó su contraseña?',
      noAccount: '¿No tiene una cuenta?',
      signUp: 'Registrarse',
    },
    register: {
      title: 'Crear Cuenta',
      subtitle: 'Únete a nosotros hoy',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Correo Electrónico',
      passwordLabel: 'Contraseña',
      confirmPasswordLabel: 'Confirmar Contraseña',
      hasAccount: '¿Ya tiene una cuenta?',
      signIn: 'Iniciar sesión',
    },
  },
  profile: {
    title: 'Configuración del Perfil',
    personalInfo: 'Información Personal',
    preferences: 'Preferencias',
    security: 'Seguridad',
  },
} as const;