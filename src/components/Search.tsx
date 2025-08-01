import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
}

const searchData: SearchResult[] = [
  {
    title: "About Holistic Heroes",
    description: "Learn about our mission to empower veterans through holistic healing practices.",
    path: "/about",
    category: "About"
  },
  {
    title: "Our Programs",
    description: "Discover our breathwork and cold exposure therapy programs for veterans.",
    path: "/programs",
    category: "Programs"
  },
  {
    title: "Donate",
    description: "Support our mission to help veterans through holistic healing practices.",
    path: "/donate",
    category: "Support"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for more information about our programs.",
    path: "/contact",
    category: "Contact"
  },
  {
    title: "Breathwork Therapy",
    description: "Natural stress relief and mental clarity through guided breathing techniques.",
    path: "/programs",
    category: "Programs"
  },
  {
    title: "Cold Exposure Therapy",
    description: "Build resilience and improve mental health through controlled cold exposure.",
    path: "/programs",
    category: "Programs"
  }
];

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filtered);
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9"
          aria-label="Search website"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search programs, services, and more..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
                onClick={() => handleSearch("")}
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {results.length > 0 && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <Card key={index} className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4">
                    <Link to={result.path} onClick={handleResultClick}>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-sm">{result.title}</h4>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          {query && results.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-2">Try searching for programs, services, or contact information</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 