import Image from "next/image"

import LOGO  from "../../../public/dashboardLogo.png"
// import { Spinner } from "@nextui-org/react"

const Fallback = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Image
				src={LOGO as unknown as string}
				height={160}
				width={160}
				alt="logo"
				className="w-[342px] h-[200px]"
			/>
			{/* <Spinner /> */}

		</div>
	)
}

export default Fallback
