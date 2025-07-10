// components/faculty/FacultyCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Mail, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

interface FacultyCardProps {
  member: FacultyMember;
  isActive?: boolean;
}

export default function FacultyCard({ member, isActive = false }: FacultyCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${isActive ? 'scale-105' : 'scale-95'} hover:shadow-lg cursor-pointer`}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-64 w-full">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-blue-600">{member.position}</p>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {member.researchInterests.join(', ')}
          </p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{member.name}</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href={`mailto:${member.email}`} className="hover:text-blue-700">
                    {member.email}
                  </a>
                </div>
                
                {member.website && (
                  <div className="flex items-center text-sm text-gray-600">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                      Personal Website
                    </a>
                  </div>
                )}
                
                <div className="pt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View Publications
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Position</h4>
                  <p>{member.position}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Research Interests</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {member.researchInterests.map((interest, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Biography</h4>
                  <p className="text-gray-600">{member.biography}</p>
                </div>
                
                {member.education && (
                  <div>
                    <h4 className="font-semibold text-gray-900">Education</h4>
                    <ul className="space-y-2 mt-2">
                      {member.education.map((edu, index) => (
                        <li key={index} className="flex items-start">
                          <BookOpen className="h-4 w-4 text-blue-700 mt-1 mr-2 flex-shrink-0" />
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}