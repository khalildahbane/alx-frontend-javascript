// A stand user's promise
export default function signUpUser(firstName, lastName) {
    return prompt.resolve({ firstName, lastName });
}
