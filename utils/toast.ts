import { toast } from "react-toastify";

export const handleShowToast = async () => {
	toast("✔️ El número ha sido copiado al portapapeles!", {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		draggable: true,
		style: {
			backgroundColor: "#f0f8ff",
			color: "#333",
			borderRadius: "8px",
			padding: "5px",
			boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
		},
		bodyStyle: {
			display: "flex",
			alignItems: "center",
		},
	});
};