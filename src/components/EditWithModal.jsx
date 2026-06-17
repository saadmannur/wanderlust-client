"use client"
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, ListBox, Modal, TextArea, TextField, Select, Surface } from '@heroui/react';;
import React from 'react';
import { RiEdit2Line } from 'react-icons/ri';

const EditWithModal = ({ destination }) => {
    const {_id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const updatedDestination = Object.fromEntries(formData.entries());
        // console.log(updatedDestination)

        const {data: tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json',
                authorization: `Bearer ${tokenData.token}`
            },
            body: JSON.stringify(updatedDestination)
        });
        const data = await res.json();
        // console.log(data)
        
    }

    return (
        <div>
            <Modal >
                <Button variant="secondary" className={'rounded-xl font-semibold'}><RiEdit2Line /> Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-xl w-full max-h-[90vh]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Edit Destination</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6 w-full overflow-y-auto">
                                <Surface variant="default">
                                    <form
                                        onSubmit={handleSubmitForm}
                                        className="p-5 space-y-8 w-full"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField name="destinationName" isRequired defaultValue={destinationName}>
                                                    <Label>Destination Name</Label>
                                                    <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <TextField name="country" isRequired defaultValue={country}>
                                                <Label>Country</Label>
                                                <Input placeholder="Indonesia" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                            {/* Category - Updated Select Component */}
                                            <div>
                                                <Select
                                                    defaultValue={category}
                                                    name="category"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select category"
                                                >
                                                    <Label>Category</Label>
                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Beach" textValue="Beach">
                                                                Beach
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Mountain" textValue="Mountain">
                                                                Mountain
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="City" textValue="City">
                                                                City
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Adventure" textValue="Adventure">
                                                                Adventure
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Cultural" textValue="Cultural">
                                                                Cultural
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Luxury" textValue="Luxury">
                                                                Luxury
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Price */}
                                            <TextField defaultValue={price} name="price" type="number" isRequired>
                                                <Label>Price (USD)</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="1299"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Duration */}
                                            <TextField defaultValue={duration} name="duration" isRequired>
                                                <Label>Duration</Label>
                                                <Input
                                                    placeholder="7 Days / 6 Nights"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField name="departureDate" type="date" isRequired 
                                                defaultValue={departureDate}>
                                                    <Label>Departure Date</Label>
                                                    <Input type="date" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                                                    <Label>Image URL</Label>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://example.com/bali-paradise.jpg"
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <TextField name="description" isRequired defaultValue={description}>
                                                    <Label>Description</Label>
                                                    <TextArea
                                                        placeholder="Describe the travel experience..."
                                                        className="rounded-3xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>

                                        {/* Buttons */}

                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type='submit'>Update Destination</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditWithModal;