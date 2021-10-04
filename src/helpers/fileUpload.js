export const fileUpload = async (file) =>{

    // const cloudUrl = 'https://api.cloudinary.com/v1_1/duzf4vfki/upload';
    const cloudUrl = 'https://api.cloudinary.com/v1_1/academia-geek/upload';
    const formData = new FormData();
    // En el segundo parámetro va el nombre que le dimos en cloudinary al unload  en este caso "ejercicio-estudiantes-firebase"
    formData.append('upload_preset','ejercicio-estudiantes-firebase');
    formData.append('file',file);
    
    try{    
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    }catch(error){
        throw error;
    }
}
