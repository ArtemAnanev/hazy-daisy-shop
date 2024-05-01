import ComparisonLayout from '@/components/layouts/ComparisonLayout'
import React from "react"

export const metadata = {
  title: 'Хэйзи Дэйзи | Сравнение товаров',
}

export default function ComparisonRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ComparisonLayout>{children}</ComparisonLayout>
}
