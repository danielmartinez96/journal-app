export const fileUpload = async (file)=>{

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dbtnpccrb/upload';
    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file',file);

    try {
        const resp = await fetch(cloudUrl,{
            method:"POST",
            body:formData
        });

        if (resp.ok) {
            const {secure_url}= await resp.json();
            return secure_url;
        }else{
            throw await resp.json();
        }
        
    } catch (err) {
        return null;
    }
    // return url de la imagen
}