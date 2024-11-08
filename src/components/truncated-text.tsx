'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface TruncatedTextProps {
  /**
   * HTML content as string
   */
  htmlContent: string;
  /**
   * Maximum number of characters to show initially
   * @default 500
   */
  maxLength?: number;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * CSS classes for the content wrapper
   */
  contentClassName?: string;
}

const truncateHTML = (html: string, maxLength: number): string => {
  // Use regex to count actual text content length without HTML tags
  const textContent = html.replace(/<[^>]*>/g, '');
  
  if (textContent.length <= maxLength) {
    return html;
  }

  let truncated = '';
  let textCount = 0;
  let tags: string[] = [];
  let i = 0;
  
  while (i < html.length && textCount < maxLength) {
    if (html[i] === '<') {
      // Capture the full tag
      const closeIndex = html.indexOf('>', i);
      const tag = html.slice(i, closeIndex + 1);
      
      if (tag.startsWith('</')) {
        tags.pop();
      } else if (!tag.endsWith('/>')) {
        tags.push(tag);
      }
      
      truncated += tag;
      i = closeIndex + 1;
    } else {
      truncated += html[i];
      textCount++;
      i++;
    }
  }
  
  // Close any open tags
  tags.reverse().forEach(tag => {
    const tagName = tag.match(/<([a-z0-9]+)/i)?.[1];
    if (tagName) {
      truncated += `</${tagName}>`;
    }
  });
  
  return truncated;
};

const getTextLength = (html: string): number => {
  return html.replace(/<[^>]*>/g, '').length;
};

const TruncatedText: React.FC<TruncatedTextProps> = ({ 
  htmlContent, 
  maxLength = 500,
  className = "",
  contentClassName = "scale-90 list-decimal -ml-5"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const textLength = getTextLength(htmlContent);
  
  // If text is shorter than maxLength, just return it
  if (textLength <= maxLength) {
    return (
      <div className={className}>
        <div 
          className={contentClassName}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div
        className={contentClassName}
        dangerouslySetInnerHTML={{
          __html: isExpanded 
            ? htmlContent 
            : `${truncateHTML(htmlContent, maxLength)}...`
        }}
      />
      
      <Button 
        variant="link" 
        className="p-0 h-auto font-medium text-blue-600 hover:text-blue-800"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </Button>
    </div>
  );
};

export default TruncatedText;