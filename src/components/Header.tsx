
import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Music, Waves, Library, Settings } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-2">
              <Waves className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg tracking-tight">Harmony<span className="text-primary">AI</span></span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground transition-all duration-200">
              <Music className="mr-2 h-4 w-4" />
              Generate
            </Button>
          </Link>
          <Link to="/model/bark">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground transition-all duration-200">
              <Waves className="mr-2 h-4 w-4" />
              Bark Model
            </Button>
          </Link>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground transition-all duration-200">
            <Library className="mr-2 h-4 w-4" />
            Library
          </Button>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Link to="/model/bark">
            <Button variant="default" className="px-4 gap-2">
              <Waves className="h-4 w-4" />
              <span>Use Bark AI</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
