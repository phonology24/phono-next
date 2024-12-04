import React from 'react'
import { useRouter } from 'next/navigation'
import '../../../../styles/contactus/admin/modal-overlay.css'

const AddDocument = () => {
    const router = useRouter()

    return (
        <button
            type="button"
            className="add-document-button"
            onClick={() => router.push('/admin-dashboard/support-document-admin/support-document-editor')}
        >
            Add Document
        </button>
    )
}

export default AddDocument
