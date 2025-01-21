import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material'
import { Funko, FunkoProps } from '../../types/funko'
import { EditFunkoProps } from '../../types/funko'
import axios from 'axios'
import FunkoDialog from '../FunkoDialog/FunkoDialog'

const EditFunkoButton = ({
    setFunkos,
    funko,
}: {
    setFunkos: React.Dispatch<React.SetStateAction<Funko[]>>
    funko: Funko
}) => {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleSubmit = async (formValues: Funko) => {
        try {
            const response = await axios.post('/api/update_funkos', formValues)
            setFunkos((funkos: Funko[]) => {
                return funkos.map((funko) => {
                    if (funko._id === response.data._id) {
                        return response.data
                    }
                    return funko
                })
            })
            handleClose() // Close the dialog after submission
        } catch (error) {
            console.error('Error adding Funko:', error)
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '10px',
            }}
        >
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
            >
                Edit
            </Button>
            <FunkoDialog
                funko={funko}
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default EditFunkoButton
