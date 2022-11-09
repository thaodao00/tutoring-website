import instance from "~/interceptors/axios"

export const getSubject = async () => {
    console.log(await instance.get('v1/subjects/get-all'))
    return await instance.get('v1/subjects/get-all')
}