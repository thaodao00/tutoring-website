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
export const getAllClass = async () => {
    return await instance.get('/v1/class-room/')
}
export const createClass = async (data) => {
    const request = await instance.post('/v1/class-room/',data)
    return request.data
}

export const fetchSubject = async (subject) => {
    const response = await getSubject();
    const {data, status} = response?.data
    if (data) {
        return data.map((e, index) => {
            return {...e, label: e.name}
        })

    }
}