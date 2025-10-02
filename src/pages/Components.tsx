// File: src/pages/Components.tsx
import { useState } from 'react';
import { format } from 'date-fns';
import { 
  CalendarDays, 
  Clock, 
  User, 
  Mail, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

export function ComponentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState([60]);
  const [bookingProgress, setBookingProgress] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const services = [
    { id: '1', name: 'Consultation', duration: 30, price: 50 },
    { id: '2', name: 'Design Review', duration: 60, price: 100 },
    { id: '3', name: 'Strategy Session', duration: 90, price: 150 },
    { id: '4', name: 'Full Day Workshop', duration: 480, price: 800 },
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  // Chart data
  const revenueData = [
    { month: 'Jan', revenue: 4200, bookings: 45 },
    { month: 'Feb', revenue: 5100, bookings: 52 },
    { month: 'Mar', revenue: 6800, bookings: 68 },
    { month: 'Apr', revenue: 7200, bookings: 71 },
    { month: 'May', revenue: 8500, bookings: 85 },
    { month: 'Jun', revenue: 9200, bookings: 92 },
  ];

  const serviceDistribution = [
    { name: 'Consultation', value: 35, color: '#8b5cf6' },
    { name: 'Design Review', value: 28, color: '#3b82f6' },
    { name: 'Strategy Session', value: 22, color: '#10b981' },
    { name: 'Workshop', value: 15, color: '#f59e0b' },
  ];

  const weeklyActivity = [
    { day: 'Mon', appointments: 12 },
    { day: 'Tue', appointments: 15 },
    { day: 'Wed', appointments: 18 },
    { day: 'Thu', appointments: 14 },
    { day: 'Fri', appointments: 20 },
    { day: 'Sat', appointments: 8 },
    { day: 'Sun', appointments: 5 },
  ];

  const handleBooking = () => {
    if (date && selectedService && selectedTime && name && email) {
      setBookingProgress(100);
      setTimeout(() => {
        setShowConfirmation(true);
      }, 500);
    }
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="text-center space-y-4 pt-8">
        <Badge className="mb-2 animate-in slide-in-from-top duration-500" variant="secondary">
          ShadCN UI Components Showcase
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-700 leading-tight pb-3 md:pb-4">
          Interactive Appointment Booking
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in slide-in-from-bottom duration-700 delay-150">
          Experience a fully responsive, mobile-first design with beautiful animations and modern UI components
        </p>
      </div>

      {/* Main Booking Interface */}
      <Tabs defaultValue="booking" className="w-full animate-in slide-in-from-bottom duration-700 delay-300">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="booking">Book Appointment</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        {/* Booking Tab */}
        <TabsContent value="booking" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Booking Form */}
            <div className="space-y-6">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    Select Your Service
                  </CardTitle>
                  <CardDescription>Choose from our available services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Choose a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name} - ${service.price} ({service.duration} min)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedServiceData && (
                    <Alert className="animate-in slide-in-from-top duration-300">
                      <AlertTitle>Service Details</AlertTitle>
                      <AlertDescription>
                        Duration: {selectedServiceData.duration} minutes | Price: ${selectedServiceData.price}
                      </AlertDescription>
                    </Alert>
                  )}

                  <Separator />

                  <div className="space-y-2">
                    <Label>Preferred Duration (minutes)</Label>
                    <div className="pt-2">
                      <Slider
                        value={duration}
                        onValueChange={setDuration}
                        min={15}
                        max={120}
                        step={15}
                        className="w-full"
                      />
                      <p className="text-sm text-muted-foreground mt-2 text-center font-medium">
                        {duration[0]} minutes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="space-y-0.5">
                      <Label htmlFor="reminder">Email Reminder</Label>
                      <p className="text-sm text-muted-foreground">Get notified before your appointment</p>
                    </div>
                    <Switch
                      id="reminder"
                      checked={reminderEnabled}
                      onCheckedChange={setReminderEnabled}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-6 w-6 text-primary" />
                    Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Calendar and Time Selection */}
            <div className="space-y-6">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-6 w-6 text-primary" />
                    Pick a Date
                  </CardTitle>
                  <CardDescription>Select your preferred appointment date</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    Choose Time
                  </CardTitle>
                  <CardDescription>
                    {date ? format(date, 'MMMM dd, yyyy') : 'Select a date first'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? 'default' : 'outline'}
                        className="w-full transition-all duration-200 hover:scale-105"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Summary and Confirmation */}
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Service</p>
                  <p className="font-medium">{selectedServiceData?.name || 'Not selected'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-medium">
                    {date && selectedTime ? `${format(date, 'MMM dd, yyyy')} at ${selectedTime}` : 'Not selected'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="font-medium text-2xl text-primary">
                    ${selectedServiceData?.price || 0}
                  </p>
                </div>
              </div>

              {bookingProgress > 0 && (
                <div className="space-y-2 animate-in slide-in-from-bottom duration-300">
                  <Progress value={bookingProgress} className="h-2" />
                  <p className="text-sm text-center text-muted-foreground">Processing booking...</p>
                </div>
              )}

              <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="w-full text-lg h-14 hover:scale-105 transition-transform duration-200"
                    onClick={handleBooking}
                    disabled={!date || !selectedService || !selectedTime || !name || !email}
                  >
                    Confirm Booking
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <CheckCircle2 className="h-7 w-7 text-green-600 dark:text-green-400" />
                      </div>
                      Booking Confirmed!
                    </DialogTitle>
                    <DialogDescription className="space-y-4 pt-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16 border-2 border-primary">
                          <AvatarImage src={`https://api.dicebear.com/8.x/notionists/svg?seed=${name}`} />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white text-xl">
                            {name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-semibold text-lg text-foreground flex items-center gap-2">
                            <User className="h-4 w-4" />
                            {name}
                          </p>
                          <p className="text-sm flex items-center gap-2 text-muted-foreground">
                            <Mail className="h-4 w-4" />
                            {email}
                          </p>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2 text-foreground">
                        <p><strong>Service:</strong> {selectedServiceData?.name}</p>
                        <p><strong>Date:</strong> {date && format(date, 'MMMM dd, yyyy')}</p>
                        <p><strong>Time:</strong> {selectedTime}</p>
                        <p><strong>Duration:</strong> {duration[0]} minutes</p>
                      </div>
                      {reminderEnabled && (
                        <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                          <Mail className="h-4 w-4 text-blue-600" />
                          <AlertDescription className="text-blue-900 dark:text-blue-100">
                            A confirmation email has been sent to {email}
                          </AlertDescription>
                        </Alert>
                      )}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Components Showcase Tab */}
        <TabsContent value="components" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                <Activity className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">413</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  +18.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                <Users className="h-5 w-5 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
                <Clock className="h-5 w-5 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">58 min</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  +8.3% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue & Bookings Chart */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  Revenue & Bookings Trend
                </CardTitle>
                <CardDescription>Monthly performance over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#8b5cf6" 
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                      name="Revenue ($)"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="bookings" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorBookings)" 
                      name="Bookings"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Service Distribution Pie Chart */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  Service Distribution
                </CardTitle>
                <CardDescription>Breakdown of services by booking percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={serviceDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {serviceDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Weekly Activity Bar Chart */}
            <Card className="border-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Weekly Appointment Activity
                </CardTitle>
                <CardDescription>Number of appointments per day this week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="day" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="appointments" 
                      fill="#8b5cf6" 
                      radius={[8, 8, 0, 0]}
                      name="Appointments"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* UI Components Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full">Default</Button>
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="outline" className="w-full">Outline</Button>
                <Button variant="destructive" className="w-full">Destructive</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progress Bars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-muted-foreground">25%</span>
                  </div>
                  <Progress value={25} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-muted-foreground">50%</span>
                  </div>
                  <Progress value={50} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Complete</span>
                    <span className="text-muted-foreground">100%</span>
                  </div>
                  <Progress value={100} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Everything you need to know about booking</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I reschedule my appointment?</AccordionTrigger>
                  <AccordionContent>
                    You can reschedule your appointment up to 24 hours before the scheduled time by clicking the link in your confirmation email.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                  <AccordionContent>
                    Cancellations made 48 hours before the appointment receive a full refund. Cancellations within 24-48 hours receive a 50% refund.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer virtual consultations?</AccordionTrigger>
                  <AccordionContent>
                    Yes! All our services are available both in-person and virtually via video call. You can select your preference during booking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards, PayPal, and bank transfers. Payment is processed securely at the time of booking.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
