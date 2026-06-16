'use client'
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const BookingCancel = ({ booking }) => {
    const {_id} = booking;

    const handleBookingDelete = async () => {
        const res = await fetch(`http://localhost:5000/booking/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type' : 'application/json'
            }
        });
        const data = await res.json();
       
        window.location.reload();
    }

    return (
        <div>
            <AlertDialog>
                <Button variant='outline' className={'rounded-none text-red-500'}><TrashBin></TrashBin> Cancel</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleBookingDelete} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default BookingCancel;