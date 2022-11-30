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
export const changePassword = async (body) => {
    return await instance.put('v1/auths/password', body)
}
export const getAllClass = async () => {
    return await instance.get('/v1/class-room/')
}
export const createClass = async (data) => {
    const request = await instance.post('/v1/class-room/', data)
    return request.data
}
export const getLevel = async () => {
    return await instance.get(`/v1/class-room/level`)
}
export const fetchLevel = async () => {
    const response = await getLevel();
    const { data, status } = response?.data
    return data
}
export const getProvinces = async () => {
    return await instance.get('/v1/address/provinces')

}
export const fetchProvinces = async (province) => {
    const response = await getProvinces();
    const { data, status } = response?.data
    return data
}
export const getDistrict = async (provinceId) => {
    const request = await instance.get(`/v1/address/districts/province/${provinceId}`)
    return request.data
}
export const getWard = async (idDistrict) => {
    const request = await instance.get(`/v1/address/wards/district/${idDistrict}`)
    return request.data
}
export const getGrade = async () => {
    return await instance.get('/v1/grades/get-all')
}
export const fetchGrade = async (subject) => {
    const response = await getGrade();
    const { data, status } = response?.data
    return data
}

export const createPayment = async (body) => {
    return await instance.post('/v1/payment/', body)

}
export const fetchSubject = async (subject) => {
    const response = await getSubject();
    const { data, status } = response?.data
    if (data) {
        return data.map((e, index) => {
            return { ...e, label: e.name }
        })

    }
}
export const getCoin = async () => {
    return await instance.get('v1/payment/')
}
export const getHistoryPayment = async () => {
    return await instance.get('v1/payment/history')
}