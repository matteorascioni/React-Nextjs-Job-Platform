// This Function check if the input that comes from the translations files that are in the Locale folder are actually Arrays, this function will be mainly in the sections 
export const localeIsArrayChecker = (obj) => {
    if(Array.isArray(obj)) {
        return true;
    }
}