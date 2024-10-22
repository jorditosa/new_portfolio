
export const validateString = ( value: unknown, maxLength: number ) => {
    if(!value || typeof value !== "string" || value.length > maxLength ) {
        return false
    }
    return true
}


export const getErrorMessage = (error: unknown ): string => {
    let message: string;

    if (error instanceof Error ) {
        message = String(error.message)
    } else if (error && typeof error === "object" && "mesage" in error) {
        message = String(error.mesage)
    } else if (typeof error === "string")  {
        message = error
    } else {
        message = "Unknown error"
    }
    return message;
}