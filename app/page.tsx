"use client";
import Map from "@/components/Map";
import { title } from "@/components/primitives";
import Row from "@/components/Row";
import data from "@/data/data.json";
import { formatDate } from "@/utils/formatDate";
import { handleShowToast } from "@/utils/toast";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
	Divider,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	useDisclosure
} from "@nextui-org/react";
import { Snippet } from "@nextui-org/snippet";
import { useState } from "react";

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isRouteOpen, onOpen: onRouteOpen, onClose: onRouteClose } = useDisclosure();
	const [size] = useState<"4xl" | "5xl" | "full">("5xl");

	const container = data.containers[0];
	const events = container?.events || [];
	const sortedEvents = events.sort((a, b) => {
		const dateA = new Date(a.event_date).getTime();
		const dateB = new Date(b.event_date).getTime();
		return dateB - dateA;
	});

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-xl text-center justify-center">
				<span className={title()}>
					Seguimiento en tiempo real de tu contenedor con{" "}
					<span className={title({ color: "blue" })}>Bill of Lading (BL)&nbsp;</span>
					&nbsp;
				</span>
				<br />
			</div>
			<Card className="max-w-[600px] mt-8">
				<CardHeader className="flex flex-row items-center w-full gap-3">
					<div className="flex h-5 items-center space-x-2 text-small">
						<p className="font-bold text-xl">BL</p>
						<Divider orientation="vertical" />
					</div>
					<Snippet hideSymbol variant="bordered" className="text-center w-full" onCopy={handleShowToast}>
						{data.shipment_number}
					</Snippet>
				</CardHeader>

				<Divider />
				<CardBody className="flex flex-row justify-center items-center gap-3">
					<div className="flex flex-col gap-2">
						<Row label="Fecha de Creación" value={data.created_at} isDate={true} />
						<Row label="Importador" value={data.importer} />
						<Row label="Número de Referencia" value={data.reference_number} />
						<Row label="Compañía Naviera" value={`${data.sealine_name}, ${data.sealine_code}`} />
						<Row label="Ubicación de Origen" value={`${data.origin_location.state}, ${data.origin_location.country}`} />
						<Row
							label="Ubicación de Destino"
							value={`${data.destination_location.state}, ${data.destination_location.country}`}
						/>
						<Row
							label="Importe de la Factura"
							value={`USD ${Math.round(Number(data.invoice_amount)).toLocaleString()} .-`}
						/>
					</div>
				</CardBody>
				<Divider />
				<CardFooter className="flex flex-row justify-center items-center gap-3">
					Contenedores asociados: {data.containers.length}
					{data.containers.map(container => (
						<Chip
							variant="bordered"
							color="primary"
							key={container.id}
							onClick={onOpen}
							className="cursor-pointer hover:bg-blue-100 hover:shadow-lg transition"
						>
							{container.number}
						</Chip>
					))}
				</CardFooter>
			</Card>

			<Modal size={size} isOpen={isOpen} onClose={onClose}>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className="flex flex-col gap-1">EVENTS</ModalHeader>
							<ModalBody>
								<div className="mb-4 grid grid-cols-2">
									<div className="flex flex-col gap-2">
										<div className="flex gap-2">
											<h3 className="font-bold">ISO Code:</h3>
											<p>{container.iso_code}</p>
										</div>
										<div className="flex gap-2">
											<h3 className="font-bold">Container Number:</h3>
											<p>{container.number}</p>
										</div>
									</div>
									<div className="flex flex-col gap-2">
										<div className="flex gap-2">
											<h3 className="font-bold">Size:</h3>
											<p>{container.size_type}</p>
										</div>

										<div className="flex gap-2">
											<h3 className="font-bold">Status:</h3>
											<p>{container.status}</p>
										</div>
									</div>
								</div>
								<Table aria-label="Eventos del Contenedor">
									<TableHeader>
										<TableColumn>Date</TableColumn>
										<TableColumn>Type</TableColumn>
										<TableColumn>Description</TableColumn>
										<TableColumn>Vessel</TableColumn>
										<TableColumn>Location</TableColumn>
										<TableColumn>Status</TableColumn>
									</TableHeader>
									<TableBody>
										{sortedEvents.map((event, index) => (
											<TableRow key={index}>
												<TableCell>{formatDate(event.event_date)}</TableCell>
												<TableCell>{event.type.toLocaleUpperCase()}</TableCell>
												<TableCell>{event.description}</TableCell>
												<TableCell>{event.vessel?.name ? `${event.vessel?.name} ${event.voyage}` : "-"}</TableCell>
												<TableCell>
													{event.location.state
														? `${event.location.state}, ${event.location.country}`
														: event.location.country}
												</TableCell>
												<TableCell>{event.status}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</ModalBody>

							<ModalFooter>
								<Button color="primary" variant="flat" onPress={onRouteOpen}>
									VER RECORRIDO
								</Button>
								<Button onPress={onClose}>Cerrar</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
			<Modal size={size} isOpen={isRouteOpen} onClose={onRouteClose}>
				<ModalContent>
					{onRouteClose => (
						<>
							<ModalBody>
								<Map />
							</ModalBody>
							<ModalFooter>
								<Button onPress={onRouteClose}>Cerrar</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</section>
	);
}
