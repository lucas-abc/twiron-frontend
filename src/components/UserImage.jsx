import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
    return (
        <Box width={size} height={size}>
            <img
                style={{ objectFit: "cover" }}
                width={size}
                height={size}
                alt="user"
                src={`https://twiron-backend.onrender.com/assets/${image}`}
            />
        </Box>
    );
};

export default UserImage;