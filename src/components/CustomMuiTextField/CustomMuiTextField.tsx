import { TextField, TextFieldProps, InputAdornment } from '@mui/material';
import { ConvertIrregularTexts } from '@utils/convertIrregularTexts';
import { ChangeEvent, ForwardedRef, ReactNode, forwardRef } from 'react';

const CustomMuiTextField = forwardRef(
  (
    {
      size = 'small',
      helperText,
      error,
      errorText,
      variant = 'outlined',
      fontFamily,
      onChange,
      englishDirection = false,
      sx,
      endIcon,
      ...rest
    }: TextFieldProps & {
      errorText?: ReactNode;
      fontFamily?: string;
      englishDirection?: boolean;
      endIcon?: ReactNode;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const handleChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const convertedValue = ConvertIrregularTexts(event.target.value);
      if (onChange) {
        onChange({
          ...event,
          target: { ...event.target, value: convertedValue },
        });
      }
    };
    return (
      <TextField
        {...rest}
        onChange={handleChange}
        ref={ref}
        size={size}
        variant={variant}
        error={error}
        helperText={
          <>
            {!!(error && errorText) && (
              <span style={{ display: 'block' }}>{errorText}</span>
            )}
            {helperText && (
              <span style={{ color: '#92a3af' }}>{helperText}</span>
            )}
          </>
        }
        sx={{
          '& .MuiFormHelperText-root': {
            marginInlineStart: 0,
          },
          '& .MuiInputLabel-root': {
            fontSize: 14,
            top: -2,
          },
          '& .MuiInputLabel-root.MuiInputLabel-shrink': {
            top: 0,
          },
          '& .MuiInputBase-input, & .MuiOutlinedInput-notchedOutline': {
            fontSize: 14,
            fontFamily,
          },
          '& .MuiInputBase-input': {
            direction: englishDirection ? 'rtl' : '',
          },
          ...sx,
        }}
        fullWidth
        InputProps={{
          endAdornment: endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : undefined,
        }}
      />
    );
  }
);

export default CustomMuiTextField;
