import { Alert } from 'react-native';

export function handleAlertConfirm({
  cancelText = 'Keep going',
  confirmText = 'End Session',
  description = 'Are you sure you want to go back?',
  navigation,
  onCancel,
  onConfirm,
  title = 'End Session',
  e,
}: {
  cancelText?: string;
  confirmText?: string;
  description?: string;
  e?: any;
  navigation?: any;
  onCancel?: () => void;
  onConfirm?: () => void;
  title?: string;
}): void {
  Alert.alert(title, description, [
    {
      onPress: (): void => {
        if (onCancel) {
          onCancel();
        }
      },
      style: 'cancel',
      text: cancelText,
    },
    {
      onPress: (): void => {
        if (onConfirm) {
          onConfirm();
        } else {
          if (navigation) {
            navigation.dispatch(e.data.action);
          }
        }
      },
      style: 'destructive',
      text: confirmText,
    },
  ]);
}
