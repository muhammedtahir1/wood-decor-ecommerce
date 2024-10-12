"use client";

import { useState, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";
import Image from "next/image";
import { indianStates } from "@/lib/constants";

export default function DesignConsultationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    name: "",
    mobileNumber: "",
    whatsappUpdates: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "9341817975";
    const message = encodeURIComponent(
      `I'm interested in your interiors for sale\n
      Property Type: ${formData.propertyType}\n
      Location: ${formData.location}\n
      Name: ${formData.name}\n
      Mobile Number: ${formData.mobileNumber}\n
      WhatsApp Updates: ${formData.whatsappUpdates ? "Yes" : "No"}`
    );
    window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Get a free design consultation</Button>
         */}
        <Image
          src={"/Web-Banner.png"}
          alt="sofa banner"
          // sizes="(max-width: 488px) 50vw, (max-width: 1200px) 50vw, 33vw"
          width={950}
          height={300}
          className="rounded-xl mx-auto my-10  w-[370px]  sm:w-[600px] md:w-[1000px]"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Get a free design consultation
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Property type</Label>
            <RadioGroup
              name="propertyType"
              value={formData.propertyType}
              onValueChange={(value) =>
                handleSelectChange("propertyType", value)
              }
              className="flex flex-wrap gap-2 mt-1"
            >
              {["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Duplex"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <RadioGroupItem value={type} id={type} />
                  <Label htmlFor={type}>{type}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="location">Property Location</Label>
            <Select
              name="location"
              value={formData.location}
              onValueChange={(value) => handleSelectChange("location", value)}
            >
              <SelectTrigger id="location">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
              {indianStates.map((state) => (
                      <SelectItem
                        key={state.name}
                        value={state.name.replaceAll(" ", "-").toLowerCase()}
                      >
                        {state.name}
                      </SelectItem>
                    ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
            />
          </div>
          <div>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <div className="flex">
              <Select defaultValue="+91" disabled>
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
              </Select>
              <Input
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="flex-1 ml-2"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="whatsappUpdates"
              name="whatsappUpdates"
              checked={formData.whatsappUpdates}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  whatsappUpdates: checked as boolean,
                }))
              }
            />
            <Label htmlFor="whatsappUpdates" className="text-sm">
              Yes, send me updates via WhatsApp.
            </Label>
          </div>
          <Button type="submit" className="w-full bg-red-700 hover:bg-red-800">
            Book a Free Consultation
          </Button>
          <p className="text-xs text-center text-gray-500">
            By submitting, you consent to our{" "}
            <a href="#" className="text-blue-500">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              terms of use
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
