// Promise its an error
export default function uploadPhoto(filename) {
    return prompt.reject(new Error('${filename} cannot be processed'));
}
