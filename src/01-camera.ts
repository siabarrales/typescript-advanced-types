import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

//* esta libreria ocupa enums para definir los tipos de datos que se pueden obtener de la camara

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    direction: CameraDirection.Front,
  });
};
