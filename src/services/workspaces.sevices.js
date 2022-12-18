import { async } from "@firebase/util"
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
    return await instance.get(`https://tutor-service.azurewebsites.net/tutor-service/v1/class-room/?status=CREATE&current_page=${currentPage}&max_result=${limit}`)

}
export const paginationSearch = async (currentPage,limit,subjectId,gradeId) => {
    return await instance.get(`https://tutor-service.azurewebsites.net/tutor-service/v1/class-room/?subject_id=${subjectId}&grade_id=${gradeId}&current_page=${currentPage}&max_result=${limit}`)

}
export const fetchProvinces = async () => {

    const response = await getProvinces();
    const { data, status } = response?.data
    return data
}
export const getDistrict = async (body) => {
    const request = await instance.get(`/v1/address/districts/province/${body}`)
    return request.data
}
export const getWard = async (body) => {
    const request = await instance.get(`/v1/address/wards/district/${body}`)
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

export const applyClass = async (body) => {
    return await instance.post('v1/class-room/register', body)
}