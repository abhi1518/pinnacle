// "use client"

// import { useEffect } from "react"
// import { useForm } from "react-hook-form"
// // import { toast } from "react-toastify"
// import Link from "next/link"
// import { useRouter } from "next/navigation"

// // import { login } from "@/app/api/mutation"
// // import { AUTH_BG } from "@/assets"
// // import { CustomInput, CustomPasswordInput } from "@/components/ui"
// // import { FORGET_PASSWORD_MODAL } from "@/constant/modalType"
// // import { ACCOUNT_VERIFIED_SUCCESSFULLY } from "@/constant/toastMessages"
// import { LoginForm, loginUsingCreds } from "@/types"
// import loginSchema from "@/validationSchema/LoginSchema"
// import { zodResolver } from "@hookform/resolvers/zod"
// // import { Button } from "@nextui-org/react"
// import { useMutation } from "@tanstack/react-query"
// import Cookies from "js-cookie"

// // import {
// // 	useAIChatStore,
// // 	useDynamicStore,
// // 	useLibraryStore,
// // 	useModalStore,
// // 	useUserStore
// // } from "@/stores"


// export default function FormLogin() {
// 	const router = useRouter()

// 	// const { loginData } = useUserStore()

// 	const {
// 		register,
// 		handleSubmit,
// 		getValues,
// 		formState: { errors }
// 	} = useForm<LoginForm>({
// 		resolver: zodResolver(loginSchema),
// 		mode: "onBlur"
// 	})


// 	const { mutate: loginMutation, isPending } = useMutation({
// 		mutationFn: (payload: loginUsingCreds) => login(payload),
// 		onSuccess: (data) => {
// 			if (data) {
// 				if (data?.jwt) Cookies.set("accessToken", data.jwt)
// 				const userData = { ...data }
// 				delete userData.jwt
// 				// loginData(userData)
// 				// resetState()
// 				// clearMessages()
// 				// clearLibraryStore()
// 				router.push("/dashboard")
// 			}
// 		},
// 		onError: (error: Error) => {
// 			toast.error(error.message)
// 		}
// 	})

// 	const onSubmit = async (data: LoginForm): Promise<void> => {
// 		// Destructure data for readability
// 		const { email, password } = data
// 		const payload: loginUsingCreds = {
// 			email,
// 			pass: password,
// 			withJwt: true
// 		}
// 		loginMutation(payload)
// 	}




// 	return (
// 		<div className="flex w-full min-h-screen">
			

// 					<form
// 						onSubmit={handleSubmit(onSubmit)}
// 						className="space-y-4 max-w-md mx-auto mt-5"
// 					>
// 						<div>
// 							<CustomInput
// 								label="Email"
// 								type="email"
// 								id="email"
// 								placeholder="you@example.com"
// 								errorMessage={errors?.email?.message || ""}
// 								isInvalid={!!errors?.email}
// 								{...register("email")}
// 							/>
// 						</div>

// 						<div>
// 							<CustomPasswordInput
// 								label="Password"
// 								type="password"
// 								id="password"
// 								placeholder="Password"
// 								errorMessage={errors?.password?.message || ""}
// 								isInvalid={!!errors?.password}
// 								{...register("password")}
// 							/>
// 						</div>

// 						<Button
// 							type="submit"
// 							className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// 							isLoading={isPending}
// 						>
// 							LOGIN
// 						</Button>

// 						<div className="text-center">
// 							<Link
// 								href="/signup"
// 								className="text-sm hover:text-blue-600 hover:underline"
// 							>
// 								Create a new account
// 							</Link>
// 							<br />
// 							<div
// 								onClickCapture={handleForget}
// 								className="text-sm hover:text-blue-600 hover:underline cursor-pointer"
// 							>
// 								Lost your password?
// 							</div>
// 						</div>
// 					</form>
// 				</div>
			
// 	)
// }
