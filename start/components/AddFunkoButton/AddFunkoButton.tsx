import React, { useState } from 'react'
import axios from 'axios'
import { Funko } from '../../types/funko'
import FunkoDialog from '../FunkoDialog/FunkoDialog'
import { Button } from '@mui/material'

const AddFunkoButton = ({
    setFunkos,
}: {
    setFunkos: React.Dispatch<React.SetStateAction<Funko[]>>
}) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleSubmit = async (formValues: Funko) => {
        try {
            const response = await axios.post('/api/funkos', formValues)
            setFunkos((funkos: Funko[]) => [...funkos, response.data])
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
                Add Funko
            </Button>
            <FunkoDialog
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default AddFunkoButton
