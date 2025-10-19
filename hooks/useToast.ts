import { useApp } from '../contexts/AppContext';
import { useLocalization } from '../contexts/LocalizationContext';

export const useToast = () => {
  const { setError, clearError } = useApp();
  const { t } = useLocalization();

  const showError = (message?: string) => {
    setError(message || t('errors.unknownError'));
    setTimeout(clearError, 3000);
  };

  const showSuccess = () => {
    console.log('Success!');
  };

  return {
    showError,
    showSuccess,
  };
};