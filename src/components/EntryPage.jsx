import { Card, Container, TextField, Typography } from "@mui/material"

export const EntryPage = () => {
    return (
        <>
        <Container maxWidth="md" >
            <Typography variant="h3">Welcome to QuizMania</Typography>
            <Card variant="outlined">
                Quiz rules
            </Card>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
            </Container>
        </>
    )
} 