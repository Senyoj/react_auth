import React, { useState } from "react";
import { fetchNodeId } from "../../api";

const Nomad = () => {
  const [nodeId, setNodeId] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateNodeId = async () => {
    setLoading(true);
    setIsCopied(false);

    try {
      const newNodeId = await fetchNodeId(); 
      setNodeId(newNodeId);
    } catch (error) {
      console.error("Error fetching node ID:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (nodeId) {
      navigator.clipboard.writeText(nodeId);
      setIsCopied(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen  p-4">
      <div className="border p-6 rounded-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Nomad Node Registration</h1>
        <p className="mb-4 text-center">
          Follow the steps below to register your node and get a unique ID.
        </p>
        <ol className="list-decimal list-inside mb-6">
          <li>Click the 'Register Node' button to generate your node ID.</li>
          <li>Copy the generated ID and use it for your configuration.</li>
        </ol>
        <div className="flex justify-center mb-4">
          <button
            onClick={generateNodeId}
            disabled={loading}
            className="bg-gray-600 border-none text-white py-2 px-4 rounded hover:bg-gray-700 transition"
          >
            {loading ? "Registering..." : "Register Node"}
          </button>
        </div>

        {nodeId && (
          <div className="bg-gray-100 p-4 rounded-md shadow-sm text-center">
            <p className="text-lg font-semibold">Your Node ID:</p>
            <p className="text-blue-500 font-mono mt-2">{nodeId}</p>
            <button
              onClick={copyToClipboard}
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              {isCopied ? "Copied!" : "Copy Node ID"}
            </button>
          </div>
        )}

       
      </div>
    </div>
  );
};

export default Nomad;
