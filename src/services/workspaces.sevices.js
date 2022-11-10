import instance from "~/interceptors/axios"

export const getSubject = async () => {
    return await instance.get('/v1/subjects/get-all')
}
export const getTutors = async () => {
    return await instance.get('/v1/tutors/')
}
export const getInfoTutor = async (userId) => {
    return await instance.get(`/v1/auths/user/${userId}`)
}