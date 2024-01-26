import * as React from 'react';
import { theme } from "@/styles/MyTheme";
import { styled, alpha } from '@mui/material/styles';
import { Button, ThemeProvider } from "@mui/material";
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

interface FilterButtonProps {
  label: string;
  options: string[];
  onSelect: (newFilter: string) => void;
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{    
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 10,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(0,0,0)',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '6px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.primary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.dark,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const FilterButton: React.FC<FilterButtonProps> = ({ label, options, onSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option); // Call the provided onSelect function with the selected option
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          sx={{
            backgroundColor: theme.palette.primary.light,
          }}
        >
          {selectedOption || label}
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options?.map((option, index) => (
            <MenuItem key={index} onClick={() => handleOptionClick(option)} disableRipple>
              {option}
            </MenuItem>
          ))}
          {/* {options?.length > 1 && <Divider sx={{ my: 0.5, backgroundColor: theme.palette.primary.dark }} />} */}
        </StyledMenu>
      </div>
    </ThemeProvider>
  );
};

export default FilterButton;
