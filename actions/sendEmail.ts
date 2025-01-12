type Inputs = {
    sender: string;
    message: string;
}

type ResponseData = {
    success: boolean;
    message: string;
  };

export const sendEmail = async (data: Inputs): Promise<ResponseData> => {
    try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
    
        if (response.ok) {
            return { success: true, message: result.message || '¡Message sent!' };
        } else {
            return { success: false, message: result.message || 'Error sending the message.' };
        }
      } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Hubo un problema al enviar el mensaje.' };
    }
}