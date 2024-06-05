import { Box, Button, TextField, Typography } from '@mui/material';
import { useCallback, useRef } from 'react';

export default function HelloComponent({
  message,
  onSubmit,
}: Readonly<{ onSubmit: (message: string) => void; message: string }>) {
  const textRef = useRef<HTMLInputElement>(null);
  const handleSubmit = useCallback(() => {
    const text = textRef.current?.value;
    if (!text) {
      return;
    }
    onSubmit(text);
  }, [onSubmit]);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        {message && <Typography variant="h1">{message}</Typography>}
        <Box className="p-2">
          <TextField id="outlined-basic" label="送信テキスト" variant="outlined" inputRef={textRef} />
        </Box>

        <Button variant="contained" onClick={handleSubmit}>
          送信
        </Button>
      </div>
    </div>
  );
}
