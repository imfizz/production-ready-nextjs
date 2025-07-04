"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("**Hello world!!!**");

    return <form action={() => {}} className="startup-form">
        <div>
            <label htmlFor="title" className="startup-form_label">Title</label>
            <Input 
                id="title" 
                name="title" 
                className="startup-form_input" 
                placeholder="Startup Title" 
                required 
            />

            {errors.title && <p className="startup-form_errors">{errors.title}</p>}
        </div>
        <div>
            <label htmlFor="description" className="startup-form_label">Description</label>
            <Textarea 
                id="description" 
                name="description" 
                className="startup-form_textarea" 
                placeholder="Startup Description" 
                required 
            />

            {errors.description && <p className="startup-form_errors">{errors.description}</p>}
        </div>
        <div>
            <label htmlFor="category" className="startup-form_label">Category</label>
            <Input 
                id="category" 
                name="category" 
                className="startup-form_input" 
                placeholder="Startup Category (Tech, Health, Education ...)" 
                required 
            />

            {errors.category && <p className="startup-form_errors">{errors.category}</p>}
        </div>
        <div>
            <label htmlFor="link" className="startup-form_label">Image URL</label>
            <Input 
                id="link" 
                name="link" 
                className="startup-form_input" 
                placeholder="Startup Image URL" 
                required 
            />

            {errors.link && <p className="startup-form_errors">{errors.link}</p>}
        </div>
        <div data-color-mode="light">
            <label htmlFor="pitch" className="startup-form_label">Pitch</label>
            <MDEditor
                value={pitch}
                onChange={(value) => setPitch(value as string)}
            />

            {errors.pitch && <p className="startup-form_errors">{errors.pitch}</p>}
        </div>
    </form>;
};

export default StartupForm;
