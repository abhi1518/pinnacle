// import { AUTH_LOGIN } from "@/constant/apiEndpoints"
// import { apiRequest } from "@/helpers"
// import { LoginForm } from "@/types"

// export interface LoginResponse {
// 	id: string
// 	email?: string
// 	name?: string
// 	image?: string | null
// 	profile_type?: number
// 	roles?: string[]
// 	jwt?: string
// }

// export const login = async (payload: LoginForm) => {
// 	const response = await apiRequest<ApiResponse<LoginResponse>>({
// 		url: AUTH_LOGIN,
// 		method: "POST",
// 		payload
// 	})
// 	return response?.data
// }