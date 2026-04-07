import pandas as pd
data = pd.read_csv('data.csv', sep = '\t')

data = data.dropna(subset= ['major'])
data = data[(data['age']>=16) & (data['age'] <= 60)]

print("Đang tính toán 6 nhóm RIASEC...")
data['R_Score'] = data[['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8']].sum(axis=1)
data['I_Score'] = data[['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8']].sum(axis=1)
data['A_Score'] = data[['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8']].sum(axis=1)
data['S_Score'] = data[['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8']].sum(axis=1)
data['E_Score'] = data[['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8']].sum(axis=1)
data['C_Score'] = data[['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8']].sum(axis=1)

replacements = {
    'cs': 'computer science',
    'comp sci': 'computer science',
    'it': 'information technology',
    'business administration': 'business',
    'rn': 'nursing'
}
data['major'] = data['major'].astype(str).str.lower().str.strip()
data['major'] = data['major'].replace(replacements)

top_majors = data['major'].value_counts().nlargest(30).index
data_final = data[data['major'].isin(top_majors)]

columns_to_keep = ['R_Score', 'I_Score', 'A_Score', 'S_Score', 'E_Score', 'C_Score', 'major']
data_final[columns_to_keep].to_csv('cleaned_riasec.csv', index=False)

print(f"Hoàn tất! Dữ liệu đã được lưu thành 'cleaned_riasec.csv'.")
print(f"Kích thước dữ liệu sẵn sàng để train: {data_final.shape[0]} dòng.")
print("\nTop 5 ngành học xuất hiện nhiều nhất:")
print(data_final['major'].value_counts().head(5))