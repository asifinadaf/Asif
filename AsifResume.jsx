import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export default function AsifResume() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Asif I Nadaf</h1>
        <p className="text-gray-600">Embedded Systems Engineer | Python | AI Enthusiast</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:asifinadaf@gmail.com"><Mail className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/asif-nadaf-400aa219b" target="_blank"><Linkedin className="w-5 h-5" /></a>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <p><strong>KLE Technological University, Hubli</strong> (2019 – 2023)</p>
            <p>B.E. in Electronics and Communication — CGPA: 7.53</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
            <ul className="list-disc pl-4">
              <li>Embedded C, Python, C++</li>
              <li>Microcontrollers, RTOS</li>
              <li>Pre-trained AI Models (Hugging Face)</li>
              <li>GitHub, VS Code, Linux, Power BI</li>
              <li>HTML, CSS, XAMPP, Hostinger</li>
              <li>DSA, Kernel Programming</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Indian Musical Instruments Recognition:</strong> CNN model using MFCC (96% accuracy).</li>
              <li><strong>Image Classification of Devices:</strong> Hardware ID using deep learning.</li>
              <li><strong>Real-time Printing Assistant:</strong> Hosted web app for print jobs.</li>
              <li><strong>Employee Geo Attendance:</strong> Geo-tagged login system with Java.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <p><strong>L&T Technology Services Ltd.</strong> (Mar 2024 – Present)</p>
            <ul className="list-disc pl-4 mb-2">
              <li>Power BI dashboards</li>
              <li>MPEG-2 PSI analysis</li>
              <li>Google Ads SDK integration</li>
              <li>Python scripting for automation</li>
            </ul>
            <p><strong>South Western Railway</strong> (Jan 2023 – May 2023)</p>
            <ul className="list-disc pl-4">
              <li>Built login/logout system with location capture</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc pl-4">
              <li>Demystifying AI & Generative AI (2025)</li>
              <li>AWS Generative AI for Developers (2025)</li>
              <li>Robot Framework in Python (2024)</li>
              <li>Linux Shell Scripting (2024)</li>
              <li>Power BI – Udemy (2024)</li>
              <li>Cryptography & Network Security – IIT Kharagpur (2022)</li>
              <li>MATLAB Onramp – MathWorks (2021)</li>
              <li>Speak English Professionally – Coursera (2020)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Languages</h2>
            <ul className="list-disc pl-4">
              <li>English – Limited Working Proficiency</li>
              <li>Hindi – Full Professional Proficiency</li>
              <li>Kannada – Full Professional Proficiency</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Asif I Nadaf. All rights reserved.
      </footer>
    </div>
  );
}