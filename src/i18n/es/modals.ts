export const modals = {
  confirmation: {
    title: 'Confirmar Acción',
    message: '¿Está seguro de que desea continuar?',
    confirm: 'Sí, Continuar',
    cancel: 'Cancelar',
  },
  deleteConfirmation: {
    title: 'Eliminar Elemento',
    message: 'Esta acción no se puede deshacer. ¿Está seguro de que desea eliminar este elemento?',
    confirm: 'Eliminar',
    cancel: 'Mantener Elemento',
  },
  error: {
    title: 'Error',
    message: 'Algo salió mal. Por favor intente de nuevo.',
    retry: 'Reintentar',
    close: 'Cerrar',
  },
  success: {
    title: 'Éxito',
    message: 'Acción completada exitosamente.',
    close: 'Cerrar',
  },
} as const;