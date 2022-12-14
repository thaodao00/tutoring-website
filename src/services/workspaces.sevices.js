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
export const becomeTutor = async (body) => {
    return await instance.post('/v1/tutors/', body)
}
export const changePassword = async (body) => {
    return await instance.put('v1/auths/password', body)
}
export const getAllClass = async () => {
    return await instance.get('/v1/class-room/')
}
export const createClass = async (body) => {
    return await instance.post('/v1/class-room/', body)
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
export const pagination = async (currentPage,limit) => {
    return await instance.get(`https://tutor-service.azurewebsites.net/tutor-service/v1/class-room/?current_page=${currentPage}&max_result=${limit}`)

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
export const updateUser = async (body) => {
    return await instance.put('v1/auths/user', body)
}
export const getClassById = async (id) => {
    return await instance.get(`v1/class-room/?user_id=${id}`)
}

export const getSubjectByTutor = async () => {
    return await instance.get('/v1/tutors/subjects')
}