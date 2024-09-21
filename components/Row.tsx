import { Chip } from "@nextui-org/react";
import { formatDate } from "@/utils/formatDate";

interface RowProps {
	label: string;
	value: string;
	isDate?: boolean;
}

const Row = ({ label, value, isDate = false }: RowProps) => {
	return (
		<div className="flex flex-row gap-2">
			<Chip variant="dot">
				<h3 className="font-bold">{label}</h3>
			</Chip>
			<p className="pt-0.5">{isDate ? formatDate(value) : value}</p>
		</div>
	);
};

export default Row;
