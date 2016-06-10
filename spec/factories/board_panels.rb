# == Schema Information
#
# Table name: board_panels
#
#  id         :integer          not null, primary key
#  board_id   :integer
#  panel_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_board_panels_on_board_id  (board_id)
#  index_board_panels_on_panel_id  (panel_id)
#

FactoryGirl.define do
  factory :board_panel do
    
  end

end
