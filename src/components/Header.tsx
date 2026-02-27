import { IconCrownFilled, IconInfoHexagonFilled, IconKeyboard, IconKeyboardFilled, IconSettings, IconUserFilled } from "@tabler/icons-react";


function Header() {
  return (
    <header className="px-10 py-6 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="flex gap-1 items-center cursor-pointer">
          <IconKeyboard className="h-10 w-10 text-primary" />
          <p className="text-2xl">Typing speed test</p>
        </div>
        <div className="flex gap-1 items-center text-text-muted text-sm hover:text-text-primary cursor-pointer">
          <IconKeyboardFilled className="h-6 w-6" />
          Play
        </div>
        <div className="flex gap-1 items-center text-text-muted text-sm hover:text-text-primary cursor-pointer">
          <IconCrownFilled className="h-6 w-6" />
          Leaderboard
        </div>
        <div className="flex gap-1 items-center text-text-muted text-sm hover:text-text-primary cursor-pointer">
          <IconInfoHexagonFilled className="h-6 w-6" />
          About
        </div>
      </div>
      <div className="flex gap-4 items-center text-text-muted">
        <IconSettings className="h-6 w-6 hover:text-text-primary cursor-pointer" />
        <div className="flex gap-1 items-center text-text-muted text-sm hover:text-text-primary cursor-pointer">
          <IconUserFilled className="h-6 w-6" />
          Log in
        </div>
      </div>
    </header>
  );
}

export default Header;
