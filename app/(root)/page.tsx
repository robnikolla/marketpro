"use client";
import { Modal } from "@/components/ui/modal";
const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal isOpen onClose={() => {}} title="test" description="Test desc">
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
