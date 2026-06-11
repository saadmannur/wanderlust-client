'use client'
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';

const DeleteDestination = ({ destination }) => {
    const { destinationName, _id } = destination;

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/destination/${_id}`,{
            method: "DELETE",
            headers: {
                'content-type' : 'application/json'
            }
        });
        const data = await res.json()
        
        if (data.deletedCount > 0){
            redirect('/destinations')
        }
    }

    return (
        <div>
            <AlertDialog>
                <Button variant="outline" className='text-red-500 font-semibold'><TrashBin></TrashBin> Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{destinationName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} variant="danger">
                                    Conform Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteDestination;