import React, { useState } from "react";
import InputField from "./InputField";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import StatusSelectField from "./StatusSelectField";
import WorkModeSelectField from "./WorkModeSelectField";

function ApplicationForm() {
  // //get current date in yyyy/mm/dd format
  // const date = new Date().toISOString().split("T")[0];

  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [workMode, setWorkMode] = useState("Onsite");
  const [notes, setNotes] = useState("");
   const [appliedAt, setAppliedAt] = useState(dayjs());
  const [status, setStatus] = useState("Applied");

  function handleStatusChange(event){
    setStatus(event.target.value);
  }

    function handleWorkModeChange(event){
    setWorkMode(event.target.value);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form action="">
        <div>
          <InputField
            required={true}
            label="Ρόλος"
            type="text"
            value={position}
            size="small"
            //   onChange={(event) => setEmail(event.target.value)}
          />
          <InputField
            required={true}
            label="company"
            type="text"
            value={company}
            size="small"
            //   onChange={(event) => setEmail(event.target.value)}
          />
          <InputField
            required={true}
            label="location"
            type="text"
            value={location}
            size="small"
            //   onChange={(event) => setEmail(event.target.value)}
          />
          <StatusSelectField value={status} onChange={handleStatusChange}/>
          <WorkModeSelectField value={workMode} onChange={handleWorkModeChange}/>
          <InputField
            required={true}
            label="notes"
            type="select"
            value={notes}
            size="small"
            //   onChange={(event) => setEmail(event.target.value)}
          />
        <DatePicker
          label="Controlled picker"
          value={appliedAt}
          onChange={(newDate) => setAppliedAt(newDate)}
        />
        </div>
        <div></div>
      </form>
    </LocalizationProvider>
  );
}

export default ApplicationForm;
