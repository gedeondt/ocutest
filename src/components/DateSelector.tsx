import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar as CalendarComponent } from './ui/calendar';
import { useLanguage } from '../contexts/LanguageContext';

export function DateSelector() {
  const [date, setDate] = useState<Date>(new Date());
  const { language } = useLanguage();

  const formatMonth = (date: Date) => {
    const monthNames = language === 'es' 
      ? ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const goToPreviousMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  return (
    <div className="flex items-center gap-1 border border-gray-200 rounded-md px-2 h-9 w-[220px]">
      <Button
        variant="ghost"
        size="sm"
        onClick={goToPreviousMonth}
        className="h-6 w-6 p-0 hover:bg-gray-100 flex-shrink-0"
      >
        <ChevronLeft className="h-4 w-4" style={{ color: '#6E6E6E' }} />
      </Button>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 hover:bg-gray-100 px-2 flex-1 justify-center"
            style={{ color: '#6E6E6E' }}
          >
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{formatMonth(date)}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={(newDate) => newDate && setDate(newDate)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={goToNextMonth}
        className="h-6 w-6 p-0 hover:bg-gray-100 flex-shrink-0"
      >
        <ChevronRight className="h-4 w-4" style={{ color: '#6E6E6E' }} />
      </Button>
    </div>
  );
}
