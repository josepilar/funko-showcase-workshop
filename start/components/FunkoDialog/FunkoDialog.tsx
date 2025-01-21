import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
} from '@mui/material'
import { Funko } from '../../types/funko'
import { useState } from 'react'

export const FunkoDialog = ({
    funko,
    open,
    handleClose,
    handleSubmit,
}: {
    funko?: Funko
    open: boolean
    handleClose: () => void
    handleSubmit: (formValues: Funko) => void
}) => {
    const [formValues, setFormValues] = useState(
        funko
            ? {
                  _id: funko._id,
                  imageUrl: funko.imageUrl,
                  source: funko.source,
                  character: funko.character,
                  yearReleased: funko.yearReleased,
                  numberInLine: funko.numberInLine,
              }
            : {}
    )
    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Enter Details</DialogTitle>
            <DialogContent>
                <TextField
                    required
                    margin="normal"
                    name="character"
                    label="Character name"
                    type="text"
                    fullWidth
                    value={formValues.character}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    margin="normal"
                    name="yearReleased"
                    label="Year Released"
                    type="number"
                    fullWidth
                    value={formValues.yearReleased}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    margin="normal"
                    name="imageUrl"
                    label="Image URL"
                    type="url"
                    fullWidth
                    value={formValues.imageUrl}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    margin="normal"
                    name="source"
                    label="Source"
                    type="text"
                    fullWidth
                    value={formValues.source}
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    margin="normal"
                    name="numberInLine"
                    label="Number in line"
                    type="number"
                    fullWidth
                    value={formValues.numberInLine}
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="warning">
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        handleSubmit(formValues as Funko)
                    }}
                    color="success"
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default FunkoDialog
